package io.dashboard.ipldashboard.repository;

// jpa create query using method name

import org.springframework.data.repository.CrudRepository;
import io.dashboard.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
    // query
    Team findByTeamName(String teamName);
}