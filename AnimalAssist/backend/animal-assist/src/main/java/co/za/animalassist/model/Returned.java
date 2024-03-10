package co.za.animalassist.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Entity
@Data
@Table(name = "returned")
public class Returned {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "return_id")
    private Long return_id;
    @Column(name = "return_date")
    private Date return_date;
    @Column(name = "status")
    private String status;
    @Column(name = "stray_id")
    private String stray_id;
}
