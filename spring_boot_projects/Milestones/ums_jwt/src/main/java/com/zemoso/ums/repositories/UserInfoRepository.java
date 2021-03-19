package com.zemoso.ums.repositories;

import com.zemoso.ums.models.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
}
