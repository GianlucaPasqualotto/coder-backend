import supertest from "supertest";
import {expect} from "chai";
import {app} from "../server.js"

const request = supertest(app);

// Pruebas de los endpoints de los usuarios
describe("api users test", ()=>{
    it("get users", async()=>{
        const response = await request.get("/users");
        //console.log(response);
        expect(response.status).equal(201);
        expect(response.body).equal("usuarios")
    })
})