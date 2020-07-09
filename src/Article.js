import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Card, CardText, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import './App.css';


const Article = (props) => {
  return (
    <div className="corpo ">
      <Jumbotron fluid className="jum bg-dark">
       <Container>
        <Row>
          <Col sm="6">
            <Card body className="options bg-info col-" >
              <CardTitle>Novo Nome:</CardTitle>
              <CardText>
                <Form>
                  <FormGroup>
                    <Label for="form">Código</Label>
                    <Input className="input" type="text" name="code" id="code" placeholder="insira o código" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="form">Nome:</Label>
                    <Input className="input" type="text" name="name" id="name" placeholder="insira o nome" />
                  </FormGroup>
                </Form>
              </CardText>
              <Button className="button">Atualizar</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body className="options bg-info col-" >
              <CardTitle>Nova Descrição:</CardTitle>
              <CardText>
                <Form>
                  <FormGroup>
                    <Label for="form">Código</Label>
                    <Input className="input" type="text" name="code" id="code" placeholder="insira o código" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="form">Descrição:</Label>
                    <Input className="input" type="text" name="name" id="name" placeholder="insira a nova descrição" />
                  </FormGroup>
                </Form>
              </CardText>
              <Button className="button">Atualizar</Button>
            </Card>
          </Col>
          <Col className="baixo" sm="6">
            <Card body className="options bg-info col-" >
              <CardTitle>Novo Preço:</CardTitle>
              <CardText>
                <Form>
                  <FormGroup>
                    <Label for="form">Código</Label>
                    <Input className="input" type="text" name="code" id="code" placeholder="insira o código" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="form">Preço:</Label>
                    <Input className="input" type="price" name="price" id="price" placeholder="insira o novo preço" />
                  </FormGroup>
                </Form>
              </CardText>
              <Button className="button">Atualizar</Button>
            </Card>
          </Col>
          <Col className="baixo" sm="6">
            <Card body className="options bg-info col-" >
              <CardTitle>Nova Quantidade:</CardTitle>
              <CardText>
                <Form>
                  <FormGroup>
                    <Label for="form">Código</Label>
                    <Input className="input" type="text" name="code" id="code" placeholder="insira o código" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="form">Quantidade:</Label>
                    <Input className="input" type="price" name="price" id="price" placeholder="insira a nova quantidade" />
                  </FormGroup>
                </Form>
              </CardText>
              <Button className="button">Atualizar</Button>
            </Card>
          </Col>
        </Row>
       </Container>



      </Jumbotron>
    </div>
  );
};

export default Article;