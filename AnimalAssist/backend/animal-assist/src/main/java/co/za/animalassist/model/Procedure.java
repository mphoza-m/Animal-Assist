package co.za.animalassist.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Entity
@Data
@Table(name = "procedure_tbl")
public class Procedure {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "procedure_id")
    private Long procedure_id;
    @Column(name = "ear_tip")
    private String ear_tip;
    @Column(name = "sterilise")
    private String sterilise;
    @Column(name = "procedure_date")
    private Date procedure_date;
    @Column(name = "treatment_id")
    private Long treatment_id;
}
