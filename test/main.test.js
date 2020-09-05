const chai = require("chai");
const chaiHttp = require("chai-http");

const should = chai.should();

chai.use(chaiHttp);
var testText = "test"
const server = require("../main");
const data = require("../data")

describe("getList", () => {
    it("getList", done => {
        chai.request(server)
            .get("/getList")
            .end((error, response) => {
                response.should.have.status(200);

                response.body.should.be.a("array");

                response.body.should.eql(data)

                done();
            });
    });
});

describe("addlist", () => {
    it("addList", done => {
        chai.request(server)
            .post("/addList")
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({ text: testText })
            .end((error, response) => {
                response.should.have.status(200);

                response.body.should.be.a("array");

                response.body[0].should.be.property("text");
                response.body[0].should.be.property("checked");

                response.body[0].should.be.property("text").eql(testText);
                response.body[0].should.be.property("checked").eql(false);
                done()

            })
    });
    after(done => {
        console.log("delList")
        chai.request(server)
            .post("/delList")
            .set('content-type', 'application/json')
            .send(JSON.stringify({ "id": 0}))
            .end((error, response) => {
                
                response.should.have.status(200);

                response.body.should.be.a("array");

                response.body.should.have.length(0);

                done();
            });
    });
});

describe("editlist", () => {
    before(done => {
        chai.request(server)
            .post("/addList")
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({ text: testText })
            .end((error, response) => {
                response.should.have.status(200);

                response.body.should.be.a("array");

                response.body[0].should.be.property("text");
                response.body[0].should.be.property("checked");

                response.body[0].should.be.property("text").eql(testText);
                response.body[0].should.be.property("checked").eql(false);
                done()

            })
    });
    it("editlist", done => {
        console.log("edit list")
            chai.request(server)
                .post("/editList")
                .set('content-type', 'application/json')
                .send(JSON.stringify({ "id": 0, "checked": true }))
                .end((error, response) => {
                    
                    response.should.have.status(200);

                    response.body.should.be.a("array");

                    response.body[0].should.be.property("text");
                    response.body[0].should.be.property("checked");

                    response.body[0].should.be.property("text").eql(testText);
                    response.body[0].should.be.property("checked").eql(true);
                    done();
                })
    });
    after(done => {
        console.log("delList")
        chai.request(server)
            .post("/delList")
            .set('content-type', 'application/json')
            .send(JSON.stringify({ "id": 0}))
            .end((error, response) => {
                
                response.should.have.status(200);

                response.body.should.be.a("array");

                response.body.should.have.length(0);

                done();
            });
    });
});

describe("delete list", () => {
    before(done => {
        chai.request(server)
            .post("/addList")
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({ text: testText })
            .end((error, response) => {
                response.should.have.status(200);

                response.body.should.be.a("array");

                response.body[0].should.be.property("text");
                response.body[0].should.be.property("checked");

                response.body[0].should.be.property("text").eql(testText);
                response.body[0].should.be.property("checked").eql(false);
                done()

            })
    });
    it("delList", done => {
        console.log("delList")
        chai.request(server)
            .post("/delList")
            .set('content-type', 'application/json')
            .send(JSON.stringify({ "id": 0}))
            .end((error, response) => {
                
                response.should.have.status(200);

                response.body.should.be.a("array");

                response.body.should.have.length(0);

                done();
            });
    });
});








// describe(" Test Uygulamaları", () => {
//     var testText = "test"
//     it("getList", done => {
//         chai.request(server)
//             .get("/getList")
//             .end((error, response) => {
//                 response.should.have.status(200);

//                 response.body.should.be.a("array");

//                 response.body.should.eql(data)

//                 done();
//             });

//     });
//     before(done => {
//         console.log("addList");
//         chai.request(server)
//             .post("/addList")
//             .set('content-type', 'application/x-www-form-urlencoded')
//             .send({ text: testText })
//             .end((error, response) => {
//                 response.should.have.status(200);

//                 response.body.should.be.a("array");

//                 response.body[0].should.be.property("text");
//                 response.body[0].should.be.property("checked");

//                 response.body[0].should.be.property("text").eql(testText);
//                 response.body[0].should.be.property("checked").eql(false);
//                 done()

//             })
//     });
//     describe("check", () => {
//         it("editList", done => {
//             console.log("edit list")
//             chai.request(server)
//                 .post("/editList")
//                 .set('content-type', 'application/json')
//                 .send(JSON.stringify({ "id": 0, "checked": true }))
//                 .end((error, response) => {
                    
//                     response.should.have.status(200);

//                     response.body.should.be.a("array");

//                     response.body[0].should.be.property("text");
//                     response.body[0].should.be.property("checked");

//                     response.body[0].should.be.property("text").eql(testText);
//                     response.body[0].should.be.property("checked").eql(true);
//                     done();
//                 })
//         })

//     });
//     after(done => {
//         console.log("delList")
//         chai.request(server)
//             .post("/delList")
//             .set('content-type', 'application/json')
//             .send(JSON.stringify({ "id": 0}))
//             .end((error, response) => {
                
//                 response.should.have.status(200);

//                 response.body.should.be.a("array");

//                 response.body.should.have.length(0);

//                 done();
//             });

//     })



// });