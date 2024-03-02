export const carMock = {
    id: "5b32f282-df3b-4a31-9491-073c10f950e4",
    name: "name", 
    description: "description",
    brand: "brand", 
    year: 1998, 
    km: 100000
}

export const carListMock = [
    {
        id: "5b32f282-df3b-4a31-9491-073c10f950e4",
        name: "name", 
        description: "description",
        brand: "brand", 
        year: 1998, 
        km: 100000
    },
    {
        id: "c76a8846-b012-4517-944a-a4223ab73b19",
        name: "name", 
        description: "description",
        brand: "brand", 
        year: 1998, 
        km: 100000
    }
];

export const carUpdatedMock = {
    id: "5b32f282-df3b-4a31-9491-073c10f950e4",
    name: "name updated", 
    description: "description",
    brand: "brand", 
    year: 1998, 
    km: 100000
}

export const createCarBodyMock = {
    name: "name", 
    description: "description",
    brand: "brand", 
    year: 1998, 
    km: 100000
};

export const updateCarBodyMock = {
    name: "name updated"
};

export const invalidCreateCarMock = {
    name: 1, 
    description: 1,
    brand: 1, 
    year: "1998", 
    km: "100000"
};

export const missingBodyCreateCarMock = { 
    description: "description",
    brand: "brand", 
    year: 1998,
};

export const invalidUpdateCarMock = {
    name: "name", 
    description: "description",
    brand: 1, 
    year: "1998", 
    km: "100000"
}

