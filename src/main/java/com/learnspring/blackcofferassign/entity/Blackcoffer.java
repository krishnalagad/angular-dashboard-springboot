package com.learnspring.blackcofferassign.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "blackcoffer")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Blackcoffer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int end_year;
    private double citylng;
    private double citylat;
    private int intensity;
    private String sector;
    private String topic;

    @Column(length = 5000)
    private String insight;

    private String swot;

    @Column(length = 1000)
    private String url;
    private String region;
    private int start_year;
    private int impact;
    private String added;
    private String published;
    private String city;
    private String country;
    private int relevance;
    private String pestle;

    @Column(length = 500)
    private String source;

    @Column(length = 1000)
    private String title;
    private int likelihood;

}
