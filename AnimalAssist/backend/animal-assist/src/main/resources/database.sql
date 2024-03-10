USE animalassist;

CREATE TABLE Stray(stray_id int auto_increment, type varchar(255), breed varchar(255), age int,
                   gender varchar(255), primary key (stray_id));


create table capture(capture_id int auto_increment, capture_date date, location_found varchar(255), stray_id int, primary key (capture_id), foreign key (stray_id) references stray(stray_id));

create table returned(return_id int auto_increment, return_date date, status varchar(255), stray_id int, primary key (return_id), foreign key (stray_id) references stray(stray_id));

create table treatment(treatment_id int auto_increment, treatment_date date, vet varchar(255), stray_id int, primary key (treatment_id), foreign key (stray_id) references stray(stray_id));

create table users(user_id int auto_increment, email varchar(255), firstname varchar(255), lastname varchar(255), phonenumber varchar(255), role_id int, pwd varchar(255), primary key (user_id));

create table give_medication(give_id int auto_increment, med_id int, med_quantity int, treatment_id int, med_name varchar(255), primary key (give_id),
                             foreign key (med_id) references medication_inventory(med_id), foreign key (treatment_id) references treatment(treatment_id));

create table procedure_tbl(procedure_id int auto_increment, ear_tip varchar(100), sterilise varchar(100), procedure_date date, treatment_id int,
                           primary key (procedure_id), foreign key (treatment_id) references treatment(treatment_id));

create table administer_vaccination(av_id int auto_increment, vac_type varchar(255), vac_date date, treatment_id int, vac_id int,
                                    primary key (av_id), foreign key (treatment_id) references treatment(treatment_id), foreign key (vac_id) references vaccination_inventory(vac_id));

create table medication_inventory(med_id int auto_increment, med_name varchar(255), med_type varchar(255), manufacturer_name varchar(255), manufacture_date date,
                                  expiry_date date, primary key (med_id));

create table vaccination_inventory(vac_id int auto_increment, vac_type varchar(255), manufacturer_name varchar(255), manufacture_date date,
                                   expiry_date date, vac_qty int, primary key (vac_id));

create table roles(role_id int, descr varchar(100));
