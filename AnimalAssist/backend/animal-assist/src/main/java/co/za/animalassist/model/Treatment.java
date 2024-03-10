package co.za.animalassist.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name = "treatment")
public class Treatment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "treatment_id")
    private Long treatment_id;
    @Column(name = "treatment_date")
    private Date treatment_date;
    @Column(name = "vet")
    private String vet;
    @Column(name = "stray_id")
    private Long stray_id;
}
