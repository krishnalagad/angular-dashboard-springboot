package com.learnspring.blackcofferassign.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PieResponse {
    List<String> list = new ArrayList<>();
    List<PieData> data = new ArrayList<>();
}
