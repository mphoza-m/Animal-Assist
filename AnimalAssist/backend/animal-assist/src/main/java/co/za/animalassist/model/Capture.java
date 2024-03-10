package co.za.animalassist.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name = "capture")
public class Capture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "capture_id")
    private Long id;
    @Column(name = "capture_date")
    private Date captureDate;
    @Column(name = "location_found")
    private String locationFound;
    @Column(name = "stray_id")
    private Long stray_id;
}
