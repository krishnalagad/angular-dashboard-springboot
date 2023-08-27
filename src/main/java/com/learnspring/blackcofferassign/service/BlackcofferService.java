package com.learnspring.blackcofferassign.service;

import com.learnspring.blackcofferassign.entity.Blackcoffer;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface BlackcofferService {

    void saveFileData(MultipartFile file);

    public void saveCsvData(MultipartFile file) throws IOException;

    List<Blackcoffer> getAllData();
}
