const express = require('express')
const app = express();
const axios = require('axios')
const bodyParser = require('body-parser')
const port = 1337;

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())
app.use('/', express.static('./'));

app.get('/id/:key', (req, res) => {
  //console.log('requested!!!');
  let key = req.params.key;
  axios.get(`http://fec-picture-service-amazon.us-east-1.elasticbeanstalk.com/id/${key}`)
    .then(results => {
      //console.log(results);
      res.send(results.data)
    })
    .catch(err => {console.log('error in pictures,', err)})
});


app.get('/test', (req, res) => {
  axios.get('http://reviews.us-east-2.elasticbeanstalk.com/test')
    .then(results => {
      res.send(results.data);
    })
    .catch(err => {
      console.log(err, 'err');
      res.send(err);
    })
});

app.post('/review', (req, res) => {
  let post = req.body
  axios.post('http://reviews.us-east-2.elasticbeanstalk.com/review/', post)
    .then(results => {
      res.send(results.data)
    })
    .catch(err => {
      console.log(err, 'err');
    })
});

app.get('/api/getAll', (req, res) => {
  axios.get('http://carts.us-east-2.elasticbeanstalk.com/api/getAll')
    .then(results => {
      res.send(results.data);
    })
    .catch(err => {
      console.log(err, 'err');
      res.send(err);
    })
});

app.get('/api/getAll/:key', (req, res) => {
  let key = req.params.key;
  axios.get(`http://carts.us-east-2.elasticbeanstalk.com/api/getAll/${key}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => {
      console.log(err, 'err');
      res.send(err);
    })
});

app.get('/desc', (req, res) => {
  axios.get('http://interstellar-desc.us-east-2.elasticbeanstalk.com/desc')
    .then(results => {
      res.send(results.data);
    })
    .catch(err => {
      console.log('err', err);
      res.send(err);
    })
})

app.get('/desc/:key', (req, res) => {
  let key = req.params.key;
  axios.get(`http://interstellar-desc.us-east-2.elasticbeanstalk.com/desc/${key}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => {
      console.log('err', err);
      res.send(err);
    })
})

app.get('/pic/:picKey', (req, res) => {
  let key = req.params.picKey;
  axios.get(`http://interstellar-desc.us-east-2.elasticbeanstalk.com/pic/${key}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => {
      console.log('err', err);
      res.send(err);
    })
})

app.listen(port, () => {
  console.log('server running on this port', port);
}) //do something