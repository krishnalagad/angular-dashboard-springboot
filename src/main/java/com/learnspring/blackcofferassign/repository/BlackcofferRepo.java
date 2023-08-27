package com.learnspring.blackcofferassign.repository;

import com.learnspring.blackcofferassign.entity.Blackcoffer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlackcofferRepo extends JpaRepository<Blackcoffer, Integer> {
}
