import styled from "styled-components";

import { useState, useEffect } from "react";

const Table = styled.table`
    margin: 30px;
  width: 100%;
  max-width: 1000px;
  background-color: #000000;
  color: #ffffff;
  border-collapse: collapse;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;


const TableHeader = styled.th`
  padding: 15px;
  text-align: left;
  background-color: #2a2a2a;
  font-weight: 600;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;


const TableCell = styled.td`
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;


const TableRow = styled.tr`
  &:last-child ${TableCell} {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: background-color 0.2s ease;
  }
`;


    const Productslist = () => {

        const [products, setProducts] = useState([]);

        useEffect(() => {
            fetch('/api/artworks')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
        },[]);

    return (
        <>  
        <h1 className="p-5 text-5xl font-bold">Administration</h1>
        <h2>Artworks</h2>
        <button>Ny Artwork</button>
        <Table>
            <thead>
                <TableHeader>Title</TableHeader>
                <TableHeader>Image</TableHeader>
                <TableHeader>Size</TableHeader>
                <TableHeader>Material</TableHeader>
                <TableHeader>Price</TableHeader>                
            </thead>
            <tbody>
                {products.map(product => (
                <TableRow key={product.id}>
                        <TableCell>{product.title}</TableCell>
                        <TableCell><img src={product.image} alt="" width="60px" /></TableCell>
                        <TableCell>{product.size}</TableCell>
                        <TableCell>{product.material}</TableCell>
                        <TableCell>{product.price} kr</TableCell>
                </TableRow>
                ))}
            </tbody>
        </Table>
        </> 
    );
};

export default Productslist;