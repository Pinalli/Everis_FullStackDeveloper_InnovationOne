package br.com.pinalli.springweb.springwebmvc.model;

public class Jedi{

      private  String name;
      private  String lastName;

        public jedi(final String name, final String lastName){
            this.name = name;
            this.lastName = lastName;
        }

    public Jedi() {

    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

