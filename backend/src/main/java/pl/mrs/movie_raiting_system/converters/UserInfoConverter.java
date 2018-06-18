package pl.mrs.movie_raiting_system.converters;

import static org.mockito.Mockito.RETURNS_DEEP_STUBS;

import pl.mrs.movie_raiting_system.dto.UserInfo;
import pl.mrs.movie_raiting_system.entities.User;

public class UserInfoConverter {

    public static UserInfo getUserInfo(User user) {
        return UserInfo.builder()
                .id(user.getId())
                .name(user.getName())
                .surname(user.getSurname())
                .email(user.getEmail())
                .build();
    }
    
    public static User getUser(UserInfo userInfo) {
    	return User.builder()
    			.id(userInfo.getId())
    			.name(userInfo.getName())
    			.surname(userInfo.getSurname())
    			.username(userInfo.getUsername())
    			.password(userInfo.getPassword())
    			.email(userInfo.getEmail())
    			.build();
    }
}
