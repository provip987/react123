
import LoaiSanPham from "./loai_san_pham";

function Trangchu(){
  const dsLoaiSanPham=[
    {
      'ten':'Loai San Pham 1',
      'ds_san_pham':[
        {
          'hinh_anh':'./1.jpg',
          'ten':'sp 11',
          'gia':'1000',
        },
        {
          'hinh_anh':'./logo192.png',
          'ten':'sp 22',
          'gia':'1000',
        },
        {
          'hinh_anh':'./1.jpg',
          'ten':'sp 33',
          'gia':'1000',
        },
        
        
      ]
    },
    {
      'ten':'Loai San Pham 2',
      'ds_san_pham':[
        {
          'hinh_anh':'1.jpg',
          'ten':'sp 33',
          'gia':'1000',
        },
        {
          'hinh_anh':'1.jpg',
          'ten':'sp 44',
          'gia':'1000',
        },
      ]
      
      
    }
  ];


  const listLoaiSanPham=dsLoaiSanPham.map(function(item){
    return(

      <LoaiSanPham data ={item}/>
    );
  });
  return(
    <>
    
    {listLoaiSanPham}</>
  )
};


export default Trangchu;