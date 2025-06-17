# School Locator API

A simple Node.js + MySQL-based REST API to add and list schools based on Longitudes and Latitudes.

## Features

- Add new schools with name, address, and location (latitude, longitude)
- Retrieve all schools sorted by distance from user's location Basind on Sorting Order Less distance school shows first in list
- MySQL database integration
- Hosted on Render

## Technologies Used

- Node.js
- Express.js
- MySQL
- Render (for deployment)
- Postman (for testing)
 ## API End points
 ### Add School
  URL: https://schoolapi-63s5.onrender.com/addschool\

  Request: POST
  Body:

  example
  ```
  {
  "name": "Gowthami High School",
  "address": "Paparaju Thota",
  "latitude": 12.87,
  "longitude": 80.67
}
```
we get like this 
```
{
  "message": "School added successfully",
  "schoolId": 1
}
```
### 2. List Schools by Proximity
URL: https://schoolapi-63s5.onrender.com/listSchools?latitude=?&longitude=?/

Request: GET

We get like this
``` 
[
    {
        "id": 6,
        "name": "Vignana Bharati High school",
        "address": "Paparaju Thota",
        "latitude": 18.77,
        "longitude": 78.67,
        "distance": 1.4
    },
    {
        "id": 2,
        "name": "Bashyam School",
        "address": "Ramapuram Road",
        "latitude": 18.9716,
        "longitude": 74.5946,
        "distance": 4.2
    },
    {
        "id": 7,
        "name": "Gowthami High School",
        "address": "Paparaju Thota",
        "latitude": 12.87,
        "longitude": 80.67,
        "distance": 5.02
    },
    {
        "id": 1,
        "name": "Sri chaitanya School",
        "address": "Muntavari center",
        "latitude": 12.77,
        "longitude": 75.67,
        "distance": 5.41
    },
    {
        "id": 4,
        "name": "Sri Chaitanya School",
        "address": "Muntavari Center",
        "latitude": 12.77,
        "longitude": 75.67,
        "distance": 5.41
    },
    {
        "id": 5,
        "name": "Sri Raghavendra High School",
        "address": "Paparaju Thota",
        "latitude": 18.77,
        "longitude": 70.67,
        "distance": 7.94
    },
    {
        "id": 3,
        "name": "Altus High School",
        "address": "Ramapuram Road Chaitanya Bharathi",
        "latitude": 28.9716,
        "longitude": 80.5946,
        "distance": 11.78
    }
]
```

### Live  End Point

https://schoolapi-63s5.onrender.com/

### Postman Collection

https://api.postman.com/collections/22888279-914c514c-3503-48cf-846b-49267592b93d?access_key=PMAT-01JXYMY2AN87CGP1745P8Z961E




  


