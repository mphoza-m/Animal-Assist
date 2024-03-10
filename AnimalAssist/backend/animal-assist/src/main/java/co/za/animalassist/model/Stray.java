package co.za.animalassist.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "stray")
public class Stray {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stray_id")
    private Long id;
    @Column(name = "type")
    private String type;
    @Column(name = "breed")
    private String breed;
    @Column(name = "age")
    private Long age;
    @Column(name = "gender")
    private String gender;

}
