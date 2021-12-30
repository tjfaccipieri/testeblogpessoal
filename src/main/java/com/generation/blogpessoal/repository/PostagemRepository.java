package com.generation.blogpessoal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.generation.blogpessoal.model.Postagem;

/**
 * @author Marcelo Barboza
 * 	Anotação @Repository conjunto de boas praticas para expor um repository para o Spring boot
 * */

@Repository
public interface PostagemRepository extends JpaRepository<Postagem, Long> {

	List <Postagem> findAllByTituloContainingIgnoreCase(String titulo);

}


