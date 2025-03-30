import styled from "styled-components";
import { Link } from "react-router";
import { useState, useEffect } from "react";

const TableConteiner = styled.div`
  
  display:block;
  padding:10px;
  padding-right:10px;
`;

const SubTitles = styled.div`
  max-width:1030px;
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  padding-left:10px;
  padding:10px;
`;


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
  marging-right:10px;
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
        <TableConteiner>
          <SubTitles>
            <div>
              <h2 className="p-5 text-3xl font-bold">Artworks</h2>
            </div>
            <div>
              <Link to="/admin/artworks/new">
                <button className=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                New Artwork</button>
              </Link>
            </div>
          </SubTitles>  

          <Table>
            <thead>
              <tr>
                <TableHeader>Title</TableHeader>
                <TableHeader>Image</TableHeader>
                <TableHeader>Size</TableHeader>
                <TableHeader>Material</TableHeader>
                <TableHeader>Price</TableHeader>                
              </tr>
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
        </TableConteiner> 
      </> 
    );
  };

export default Productslist;