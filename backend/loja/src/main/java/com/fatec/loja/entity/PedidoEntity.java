package com.fatec.loja.entity;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.sql.Date;

@Entity
@Table(name = "pedido")
public class PedidoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) 
    private int codigo;
    private int codigoCliente;
    private double total;
    private String status;
    private String entrega;
    private String dataPedido;
    /*@Column(name = "dataPedido", nullable = false, updatable = false)
    @CreationTimestamp
    private Date dataPedido;*/

    public int getCodigo() {
        return codigo;
    }
    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }
    public int getCodigoCliente() {
        return codigoCliente;
    }
    public void setCodigoCliente(int codigoCliente) {
        this.codigoCliente = codigoCliente;
    }
    public double getTotal() {
        return total;
    }
    public void setTotal(double total) {
        this.total = total;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public String getEntrega() {
        return entrega;
    }
    public void setEntrega(String entrega) {
        this.entrega = entrega;
    }
	public String getDataPedido() {
		return dataPedido;
	}
	public void setDataPedido(String dataPedido) {
		this.dataPedido = dataPedido;
	}
    
    
}
