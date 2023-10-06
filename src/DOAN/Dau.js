import { NavLink } from "react-router-dom";
function Dau(){
    return (
        <>
         <header>
    <div class="headTop">
      <div class="row">
        <div class="col-md-6">
          <div class="menuHeadChung">
            <NavLink to="/Menu" className="Nav-Link active" class="menuHead">Trang chủ</NavLink>
            <NavLink to="/Menu" className="Nav-Link active" class="menuHead">về chúng tôi</NavLink>
            <NavLink to="/Menu" className="Nav-Link active" class="menuHead">sản phẩm</NavLink>
            <NavLink to="/Menu" className="Nav-Link active" class="menuHead">Tin tức</NavLink>
            <NavLink to="/Menu" className="Nav-Link active" class="menuHead">liên hệ</NavLink>
          </div>

        </div>
        <div class="col-md-3">
          
        </div>
        <div class="col-md-3">
            <NavLink to="/Menu" className="Nav-Link active" class="LoginHead">ĐĂNG KÝ</NavLink>
            <NavLink to="/Menu" className="Nav-Link active" class="LoginHead">ĐĂNG NHẬP</NavLink>
        </div>
      </div>
    </div>


    <div class="headCenter">
      <div class="row">
        <div class="col-md-6">
            <div class="container">
            <img src="anh_1.jpg" alt=""/> 
            <h1>ban hang online</h1>
         </div>
        </div>
        <div class="col-md-2">
          
        </div>
        <div class="col-md-2">
         
          <input type="search" id="search" placeholder="Search..." class="TimKiem"/>
        </div>
      </div>
    </div>


    <div class="headBottom">
      
    </div>
  </header>
        </>
    )
}

export default Dau;