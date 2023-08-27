package com.learnspring.blackcofferassign.service.impl;

import com.learnspring.blackcofferassign.entity.Blackcoffer;
import com.learnspring.blackcofferassign.helper.ExcelHelper;
import com.learnspring.blackcofferassign.repository.BlackcofferRepo;
import com.learnspring.blackcofferassign.service.BlackcofferService;
import jakarta.transaction.Transactional;
import org.apache.commons.csv.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.*;
import java.util.stream.Stream;

@Service
public class BlackcofferServiceImpl implements BlackcofferService {

    @Autowired
    private BlackcofferRepo blackcofferRepo;

    private Logger logger = LoggerFactory.getLogger(BlackcofferServiceImpl.class);

    @Override
    public void saveFileData(MultipartFile file) {
        try {
            List<Blackcoffer> data = ExcelHelper.convertExcelToList(file.getInputStream());
            data.forEach((d)->{
                this.logger.info("{}", d);
            });
            this.logger.info("Total records: {}", data.size());
            this.blackcofferRepo.saveAll(data);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Blackcoffer> getAllData() {
        return this.blackcofferRepo.findAll();
    }

//
//    ------------------------------------------------------------------------------------------------------------------


    @Override
    @Transactional
    public void saveCsvData(MultipartFile file) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()));
        CSVParser csvParser = new CSVParser(reader, CSVFormat.DEFAULT
                .withFirstRecordAsHeader()
                .withTrim());

        List<Blackcoffer> records = new ArrayList<>();
        int cnt = 1;
        for (CSVRecord csvRecord : csvParser) {
            Blackcoffer record = new Blackcoffer();
            this.logger.info("Row-{}: {}", cnt, record);
            cnt++;
//            record.setEnd_year(Integer.parseInt(csvRecord.get("end_year")));
//            record.setCitylng(csvRecord.get("citylng"));
//            record.setCitylat(csvRecord.get("citylat"));
//            record.setIntensity(Integer.parseInt(csvRecord.get("intensity")));
//            record.setSector(csvRecord.get("sector"));
//            record.setTopic(csvRecord.get("topic"));
//            record.setInsight(csvRecord.get("insight"));
//            record.setSwot(csvRecord.get("swot"));
//            record.setUrl(csvRecord.get("url"));
//            record.setRegion(csvRecord.get("region"));
//            record.setStart_year(Integer.parseInt(csvRecord.get("start_year")));
//            record.setImpact(Integer.parseInt(csvRecord.get("impact")));
//            record.setAdded(csvRecord.get("added"));
//            record.setPublished(csvRecord.get("published"));
//            record.setCity(csvRecord.get("city"));
//            record.setCountry(csvRecord.get("country"));
//            record.setRelevance(Integer.parseInt(csvRecord.get("relevance")));
//            record.setPestle(csvRecord.get("pestle"));
//            record.setSource(csvRecord.get("source"));
//            record.setTitle(csvRecord.get("title"));
//            record.setLikelihood(Integer.parseInt(csvRecord.get("likelihood")));

//            records.add(record);
        }

//        this.blackcofferRepo.saveAll(records);
    }

}
