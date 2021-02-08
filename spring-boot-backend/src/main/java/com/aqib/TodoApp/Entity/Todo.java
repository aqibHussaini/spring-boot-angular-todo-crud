package com.aqib.TodoApp.Entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import javax.persistence.*;
import java.sql.Timestamp;
@Entity
public class Todo {
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private int id;
   private int status;

   public Todo() {
   }

   @Override
   public String toString() {
      return "Todo{" +
              "id=" + id +
              ", status=" + status +
              ", todotittle='" + todotittle + '\'' +
              ", tododescription='" + tododescription + '\'' +
              ", createDateTime=" + createDateTime +
              ", updateDateTime=" + updateDateTime +
              '}';
   }

   public int getId() {
      return id;
   }

   public void setId(int id) {
      this.id = id;
   }

   public int getStatus() {
      return status;
   }

   public void setStatus(int status) {
      this.status = status;
   }

   public String getTodotittle() {
      return todotittle;
   }

   public void setTodotittle(String todotittle) {
      this.todotittle = todotittle;
   }

   public String getTododescription() {
      return tododescription;
   }

   public void setTododescription(String tododescription) {
      this.tododescription = tododescription;
   }

   public Timestamp getCreateDateTime() {
      return createDateTime;
   }

   public void setCreateDateTime(Timestamp createDateTime) {
      this.createDateTime = createDateTime;
   }

   public Timestamp getUpdateDateTime() {
      return updateDateTime;
   }

   public void setUpdateDateTime(Timestamp updateDateTime) {
      this.updateDateTime = updateDateTime;
   }

   private  String todotittle,tododescription;
   @CreationTimestamp
   @Column(name = "create_timestamp")
   private Timestamp createDateTime;

   public Todo(int id, int status, String todotittle, String tododescription, Timestamp createDateTime, Timestamp updateDateTime) {
      this.id = id;
      this.status = status;
      this.todotittle = todotittle;
      this.tododescription = tododescription;
      this.createDateTime = createDateTime;
      this.updateDateTime = updateDateTime;
   }

   @UpdateTimestamp
   @Column(name = "update_timestamp")
   private Timestamp updateDateTime;

}
