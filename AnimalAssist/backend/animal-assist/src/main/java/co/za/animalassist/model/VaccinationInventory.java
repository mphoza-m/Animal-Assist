package co.za.animalassist.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Entity
@Data
@Table(name = "vaccination_inventory")
public class VaccinationInventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vac_id")
    private Long id;
    @Column(name = "vac_type")
    private String vac_type;
    @Column(name = "manufacturer_name")
    private String manufacturer_name;
    @Column(name = "manufacture_date")
    private Date manufacture_date;
    @Column(name = "expiry_date")
    private Date expiry_date;
    @Column(name = "vac_qty")
    private Long vac_qty;
}
