package com.fatec.loja.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "item")
public class ItemEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) 
    private int codigo;
    private int codigoProduto;
    private int codigoPedido;
    private int quantidade;
    private double valorUnitario;
    private double valorTotal;

    public int getCodigo() {
        return codigo;
    }
    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }
    public int getCodigoProduto() {
        return codigoProduto;
    }
    public void setCodigoProduto(int codigoProduto) {
        this.codigoProduto = codigoProduto;
    }
    public int getCodigoPedido() {
        return codigoPedido;
    }
    public void setCodigoPedido(int codigoPedido) {
        this.codigoPedido = codigoPedido;
    }
    public int getQuantidade() {
        return quantidade;
    }
    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }
    public double getValorUnitario() {
        return valorUnitario;
    }
    public void setValorUnitario(double valorUnitario) {
        this.valorUnitario = valorUnitario;
    }
    public double getValorTotal() {
        return valorTotal;
    }
    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }

    
}
