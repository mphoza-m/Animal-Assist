package co.za.animalassist.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Entity
@Data
@Table(name = "medication_inventory")
public class MedicationInventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "med_id")
    private Long med_id;
    @Column(name = "med_name")
    private String med_name;
    @Column(name = "med_type")
    private String med_type;
    @Column(name = "manufacturer_name")
    private String manufacturer_name;
    @Column(name = "manufacture_date")
    private Date manufacture_date;
    @Column(name = "expiry_date")
    private Date expiry_date;
}
