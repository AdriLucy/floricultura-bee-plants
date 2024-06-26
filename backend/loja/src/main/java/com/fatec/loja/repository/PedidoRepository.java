package com.fatec.loja.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import com.fatec.loja.entity.PedidoEntity;

@Repository
public interface PedidoRepository  extends 
JpaRepository<PedidoEntity, Integer>, 
JpaSpecificationExecutor<PedidoEntity> {

	List<PedidoEntity> findByCodigoCliente(int codigoCliente);

}
