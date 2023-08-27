package com.learnspring.blackcofferassign.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TableResponse {

    private int intensity;
    private int likelihood;
    private int relevance;
    private int end_year;
    private String city;
    private String country;
    private String topic;
    private String region;

}
