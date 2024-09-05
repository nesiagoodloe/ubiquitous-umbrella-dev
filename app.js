require('dotenv').config()
const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('./public/'))

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;

console.log(uri);
//"mongodb+srv://nesiagoodloe03:nesiagoodloe2003@cluster0.pff8r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

//function whateverNameOfIt (parms) {}
// ()=>{}

app.get('/mongo', async (req,res)=>{

    console.log('in /mongo');
    await client.connect();

    console.log('connnected');
    // Send a ping to confirm a successful connection
    let result = await client.db("nesia's-db").collection("whatever-collection")
    .find({}).toArray(); //function(err, result) {
        //if (err) throw  err;
        console.log(result);
        //db.close();
   
})

//console.log('im on a node Server, yo');

app.get('/', function (req, res){
    //res.send('Hello Node from local Devbox')
    res.sendFile('index.html');
})

app.get('ejs', (req,res)=>{

    res.render('index', {
        myServerVariable : "something from server"
    });

})


app.listen(3000);

