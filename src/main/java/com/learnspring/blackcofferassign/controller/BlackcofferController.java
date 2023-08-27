package com.learnspring.blackcofferassign.controller;

import com.learnspring.blackcofferassign.dto.PieData;
import com.learnspring.blackcofferassign.dto.PieResponse;
import com.learnspring.blackcofferassign.dto.TableResponse;
import com.learnspring.blackcofferassign.entity.Blackcoffer;
import com.learnspring.blackcofferassign.helper.ExcelHelper;
import com.learnspring.blackcofferassign.service.BlackcofferService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class BlackcofferController {

    @Autowired
    private BlackcofferService blackcofferService;

    private Logger logger = LoggerFactory.getLogger(BlackcofferController.class);

    private static Map<String, Integer> checkOccurance(List<String> arr) {
        Map<String, Integer> result = new LinkedHashMap<>();
        for (int i = 0; i < arr.size(); i++) {
            int count = 0;
            for (int j = 0; j < arr.size(); j++)
                if (arr.get(i).equals(arr.get(j)))
                    count++;

            result.put(arr.get(i), count);
            count = 0;
        }
        return result;
    }

    @PostMapping("/upload")
    public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file) {
        if (ExcelHelper.checkFileType(file)) {
            this.blackcofferService.saveFileData(file);
            return ResponseEntity.status(HttpStatus.CREATED).body(
                    Map.of("message", "File uploaded successfully."));
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                Map.of("message", "Please select Excel file only."));
    }

    @GetMapping("/get-pie-data")
    public ResponseEntity<PieResponse> getDataForPieChart() {

        List<String> list = new ArrayList<>();

        List<Blackcoffer> data = this.blackcofferService.getAllData();
        for (Blackcoffer b : data) {
            String country = b.getCountry();
            if (!(country.equals("null"))) {
                list.add(country);
            }
        }
        Map<String, Integer> map = checkOccurance(list);
        List<PieData> pieData = new ArrayList<>();
        List<String> names = new ArrayList<>();
        String[] colors = new String[]{"#044342", "#7e0505", "#ed9e20", "#6920fb", "#121212"};
        int i = 0;

        for (String key : map.keySet()) {
            if (i == colors.length)
                i = 0;
            Integer integer = map.get(key);
            names.add(key);
            PieData pd = new PieData(key, integer, colors[i]);
            pieData.add(pd);
            i += 1;
        }

        PieResponse pieResponse = new PieResponse(names, pieData);

        return ResponseEntity.ok(pieResponse);
    }

    @GetMapping("/get-bar-data")
    public ResponseEntity<?> getDataForBarChart() {
        List<Blackcoffer> arrObj = new ArrayList<>();

        List<Blackcoffer> data = this.blackcofferService.getAllData();
        Collections.sort(data, new Comparator<Blackcoffer>() {
            @Override
            public int compare(Blackcoffer o1, Blackcoffer o2) {
                return o2.getIntensity() - o1.getIntensity();
            }
        });

        for (Blackcoffer b : data) {
            String country = b.getCountry();
            int intensity = b.getIntensity();
            if (!(country.equals("null")) && !(intensity == 0)) {
                arrObj.add(b);
            }
        }

        String[] colors = new String[]{"#044342", "#7e0505", "#ed9e20", "#6920fb", "#121212"};
        List<String> names = new ArrayList<>() {{
            add(arrObj.get(0).getCountry());
            add(arrObj.get(1).getCountry());
            add(arrObj.get(2).getCountry());
            add(arrObj.get(3).getCountry());
            add(arrObj.get(4).getCountry());
        }};

        List<PieData> objects = new ArrayList<>();
        objects.add(new PieData(arrObj.get(0).getCountry(), arrObj.get(0).getIntensity(), colors[0]));
        objects.add(new PieData(arrObj.get(1).getCountry(), arrObj.get(1).getIntensity(), colors[1]));
        objects.add(new PieData(arrObj.get(2).getCountry(), arrObj.get(2).getIntensity(), colors[2]));
        objects.add(new PieData(arrObj.get(3).getCountry(), arrObj.get(3).getIntensity(), colors[3]));
        objects.add(new PieData(arrObj.get(4).getCountry(), arrObj.get(4).getIntensity(), colors[4]));

        PieResponse pieResponse = new PieResponse(names, objects);

        return ResponseEntity.ok(pieResponse);
    }

    @GetMapping("get-all")
    public List<Blackcoffer> getAll() {
        return this.blackcofferService.getAllData();
    }

    @GetMapping("/get-table-data")
    public ResponseEntity<List<TableResponse>> getDataForTable() {

        List<Blackcoffer> data = this.blackcofferService.getAllData();
        List<TableResponse> list = data.stream().map((d) -> this.extractDataFromBlackcoffer(d))
                .collect(Collectors.toList());

        return ResponseEntity.ok(list);
    }

    private TableResponse extractDataFromBlackcoffer(Blackcoffer data) {
        return new TableResponse(data.getIntensity(), data.getLikelihood(), data.getRelevance(), data.getEnd_year(),
                data.getCity(), data.getCountry(), data.getTopic(), data.getRegion());
    }

//    @PostMapping("/upload-csv")
//    public ResponseEntity<String> uploadCsv(@RequestParam("file") MultipartFile file) {
//        try {
//            this.blackcofferService.saveCsvData(file);
//            return ResponseEntity.ok("CSV data uploaded and saved successfully.");
//        } catch (IOException e) {
//            return ResponseEntity.badRequest().body("Error while uploading CSV data: " + e.getMessage());
//        }
//    }
}
