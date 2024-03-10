package co.za.animalassist.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "give_medication")
public class GiveMedication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "give_id")
    private Long give_id;
    @Column(name = "med_id")
    private Long med_id;
    @Column(name = "med_quantity")
    private String med_quantity;
    @Column(name = "treatment_id")
    private Long treatment_id;
    @Column(name = "med_name")
    private String med_name;
}
