DROP DATABASE IF EXISTS zoom;

CREATE DATABASE zoom;

USE zoom;

CREATE TABLE user_account (
	id VARCHAR(255) NOT NULL,
	user_email VARCHAR(255) NOT NULL,
	user_password VARCHAR(255) NOT NULL,
	user_full_name VARCHAR(255) NOT NULL,
	user_type VARCHAR(255) ,
	user_resume VARCHAR(255) ,
	linkedin_profile VARCHAR(255) ,
	Y_O_E VARCHAR(255),
	preferred_location VARCHAR(255),
	job_role VARCHAR(255) ,
	PRIMARY KEY (id)
);


CREATE TABLE meeting (
	id BIGINT NOT NULL AUTO_INCREMENT,
	meeting_title VARCHAR(255) NOT NULL,
	meeting_uid VARCHAR(255) NOT NULL,
	created_by VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);


