package com.learnspring.blackcofferassign.helper;

import com.learnspring.blackcofferassign.entity.Blackcoffer;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ExcelHelper {

    private static Logger logger = LoggerFactory.getLogger(ExcelHelper.class);
    private static String EXCEL_CONTENT_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
//    private static String EXCEL_CONTENT_TYPE = "text/csv";

    // check the type of file
    // if its Excel file then will return true
    // else will return false.
    public static boolean checkFileType(MultipartFile file) {

        String contentType = file.getContentType();

        return contentType.equals(EXCEL_CONTENT_TYPE);

    }

    // this method converts Excel file to list.
    @SuppressWarnings("resource")
    public static List<Blackcoffer> convertExcelToList(InputStream is) {

        List<Blackcoffer> list = new ArrayList<>();

        try {

            XSSFWorkbook workbook = new XSSFWorkbook(is);
            XSSFSheet sheet = workbook.getSheet("Data");

            int rowNumber = 0;
            Iterator<Row> iterator = sheet.iterator();

            while (iterator.hasNext()) {

                Row row = iterator.next();

                if (rowNumber == 0) {
                    rowNumber++;
                    continue;
                }

                Iterator<Cell> cells = row.iterator();

                int cid = 0;

                Blackcoffer e = new Blackcoffer();

                while (cells.hasNext()) {

                    Cell cell = cells.next();

                    switch (cid) {

                        case 0:
                            e.setEnd_year((int) cell.getNumericCellValue());
                            break;

                        case 1:
//                            double value = cell.getNumericCellValue();
//                            logger.info(String.valueOf(cell.getNumericCellValue()));
//                            DecimalFormat decimalFormat = new DecimalFormat("#.##########");
//                            e.setCitylng(decimalFormat.format(value));

//                            if (cell.getStringCellValue() == "null" || cell.getStringCellValue() == null) {
//                                e.setCitylng(cell.getStringCellValue());
//                            }
//                            else {
//                                double value = Double.valueOf(cell.getStringCellValue());
//                                DecimalFormat decimalFormat = new DecimalFormat("#.##########");
//                                e.setCitylng(String.valueOf(decimalFormat.format(value)));
//                            }

//                            e.setCitylng(cell.getStringCellValue());

                            double value = cell.getNumericCellValue();
                            if (value < 0) {
                                logger.info("Negative value: {}", value);
                            }
                            DecimalFormat decimalFormat = new DecimalFormat("#.##########");
                            e.setCitylng(Double.parseDouble(decimalFormat.format(value)));
                            break;

                        case 2:
//                            double value1 = cell.getNumericCellValue();
//                            logger.info(String.valueOf(cell.getNumericCellValue()));
//                            DecimalFormat decimalFormat1 = new DecimalFormat("#.##########");
//                            e.setCitylng(decimalFormat1.format(value1));

//                            if ((cell.getStringCellValue() == "null") || (cell.getStringCellValue() == null)) {
//                                e.setCitylng(cell.getStringCellValue());
//                            }
//                            else {
//                                double value = Double.valueOf(cell.getStringCellValue());
//                                DecimalFormat decimalFormat = new DecimalFormat("#.##########");
//                                e.setCitylng(String.valueOf(decimalFormat.format(value)));
//                            }
//                            e.setCitylat(cell.getStringCellValue());

                            double value1 = cell.getNumericCellValue();
                            if (value1 < 0) {
                                logger.info("Negative value: {}", value1);
                            }
                            DecimalFormat decimalFormat1 = new DecimalFormat("#.##########");
                            e.setCitylat(Double.parseDouble(decimalFormat1.format(value1)));
                            break;

                        case 3:
                            e.setIntensity((int)cell.getNumericCellValue());
                            break;

                        case 4:
                            e.setSector(cell.getStringCellValue().trim());
                            break;

                        case 5:
                            e.setTopic(cell.getStringCellValue().trim());
                            break;

                        case 6:
//                            logger.info("{}", cell.getCellType());
                            if (cell.getCellType() == CellType.NUMERIC) {
                                e.setInsight(String.valueOf(cell.getNumericCellValue()));
                            } else if (cell.getCellType() == CellType.STRING) {
                                e.setInsight(cell.getStringCellValue().trim());
                            }

                            break;

                        case 7:

                            e.setSwot(cell.getStringCellValue());
                            break;
                        case 8:
                            e.setUrl(cell.getStringCellValue());
                            break;
                        case 9:
                            e.setRegion(cell.getStringCellValue());
                            break;
                        case 10:
                            e.setStart_year((int) cell.getNumericCellValue());
                            break;
                        case 11:
                            e.setImpact((int) cell.getNumericCellValue());
                            break;
                        case 12:
                            e.setAdded(cell.getStringCellValue());
                            break;
                        case 13:
                            e.setPublished(cell.getStringCellValue());
                            break;
                        case 14:
                            e.setCity(cell.getStringCellValue());
                            break;
                        case 15:
                            e.setCountry(cell.getStringCellValue());
                            break;
                        case 16:
                            e.setRelevance((int) cell.getNumericCellValue());
                            break;
                        case 17:
                            e.setPestle(cell.getStringCellValue());
                            break;
                        case 18:
                            e.setSource(cell.getStringCellValue());
                            break;
                        case 19:
                            e.setTitle(cell.getStringCellValue());
                            break;
                        case 20:
                            e.setLikelihood((int) cell.getNumericCellValue());
                            break;


                        default:
                            break;
                    }

                    cid++;
                }
                list.add(e);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return list;
    }
}
