package com.fatec.loja;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.loja.entity.ItemEntity;
import com.fatec.loja.repository.ItemRepository;



@RestController
@CrossOrigin( origins = "*" )
public class ItemController {
    @Autowired
    ItemRepository repository;
   
    @GetMapping("/api/item/{codigo}")
    public ResponseEntity<ItemEntity> carregar(@PathVariable int codigo){
       Optional<ItemEntity> obj = repository.findById(codigo);
       if(obj.isPresent()) {
            return ResponseEntity.ok(obj.get());
       } else {
            return ResponseEntity.ok(null);
       }
    }

    @PostMapping("/api/item")
    public ResponseEntity<String> gravar(@RequestBody ItemEntity obj){
        repository.save(obj);
        return ResponseEntity.ok("item gravado com sucesso"+ obj.getCodigo()); 
    }

    @PostMapping("/api/itens")
    public ResponseEntity<String> 
        gravarLista(@RequestBody List<ItemEntity> lista){
        repository.saveAll(lista);
        return ResponseEntity.ok("itens gravados com sucesso"); 
    }
    
    
    @PutMapping("/api/item")
    public ResponseEntity<String> 
        atualizar(@RequestBody ItemEntity obj){
        repository.save(obj);
        return ResponseEntity.ok("Item alterado com sucesso");
    }

    @DeleteMapping("/api/item/{codigo}")
    public ResponseEntity<String> remover(@PathVariable int codigo){
        repository.deleteById(codigo);
        return ResponseEntity.ok("item removido com sucesso");
    }

/* 
    @GetMapping("/api/itens")
    public ResponseEntity<List<PedidoEntity>> listar(){
        return ResponseEntity.ok(repository.findAll());
    }
        trazer itens de um pedido especifico
    */
}
