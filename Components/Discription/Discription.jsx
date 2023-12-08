import React from 'react'



import ninth_life from '../Assets/ninth life.jpg'




const Discription = () => {
  return (
    <div>
        <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Discription page</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
  {/*jQuery library*/}
  {/*Latest compiled and minified JavaScript*/}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Navbar in Bootstrap</title>
</div>
     <div>
  <nav className="navbar navbar-dark navbar-fixed-top" style={{backgroundColor: '#ffffff'}}>
    <div className="container" style={{padding:'0px', margin:'0px'}}>
      <div className="navbar-header" style={{fontFamily: 'Raleway, \'sans-serif\'', letterSpacing: '1px'}}>
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <i className="fa fa-bars" style={{ color:'#fff',border: 'solid #fff',padding:'4px 10px',fontsize:'1.5em',position:'absolute', top:'-0.5px',   left:'-30px'}} />
        </button>
        <a className="navbar-brand" style={{color: 'black', fontSize: '50', margin: '20', right: '900',position: 'relative',fontFamily: 'Raleway, \'sans-serif\'', letterSpacing: '1px'}} href="#">Bookley</a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <form className="navbar-form navbar-left" style={{position:'relative',top:'10px'}}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" style={{color: 'black', fontSize: '20', margin: '10', width: '600', height: '60', borderRadius: '50'}} />
          </div>
          <button type="submit" className="btn btn-default" style={{borderRadius: 50}}><span className="glyphicon glyphicon-search" style={{height: '30', width: '30', margin: '10', fontSize: '25',color:'#000000'}} /></button>
        </form>
        <ul className="nav navbar-nav navbar-right">
          <li><a href><span className="glyphicon glyphicon-shopping-cart" style={{color: 'black', fontSize: '40', margin: '10', top: '-90px', left: '800'}} />
              Cart<span className="badge" /></a></li>
          <li><a href><span className="glyphicon glyphicon-cog" style={{color: 'black', fontSize: '40', margin: '10', top: '-90px', left: '800'}} />
              Settings</a></li>
          <li><a href><span className="glyphicon glyphicon-log-out" style={{color: 'black', fontSize: '40', margin: '10', top: '-90px', left: '800'}} />
              Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <section style={{position:'relative',top:'4.5em'}}>
    <div className="container-fluid">
      <div className="row">
        {/* Product picture */}
        <div className="col-sm-5">
          <div className="thumbnail">
            <div>
              <img src={ninth_life} style={{height:'1100', marginTop: '200', marginLeft: '300'}} />
            </div>
            <div className="caption">
              <div className="row buttons" style={{ margin:'20px'}}>
                <h1 className="btn col-sm-4 col-sm-offset-1 btn-lg" style={{left: '1190', fontSize: '150', width: '900', top: '-1200px', height: '100'}}>
                  The Ninth life</h1>
                <h3 className="btn col-sm-4 col-sm-offset-1 btn-lg" style={{left: '950', fontSize: '50', width: '900', top: '-1100px', height: '100'}}>4.7 Star Rating</h3>
                <h1 className="btn col-sm-4 col-sm-offset-1 btn-lg" style={{left: '950', fontSize: '120', width: '900', top: '-1100px', height: '100', color: 'red'}}>
                  Rs 199</h1>
                <button className="btn col-sm-4 col-sm-offset-1 btn-lg" style={{backgroundColor: '#847DDC', color: '#fff', left: '1190', fontSize: '40', width: '900', top: '-900px', height: '100'}}><i className="fa fa-bolt" style={{}} /> BUY NOW</button>
                <button className="btn  col-sm-4 col-sm-offset-2 btn-lg" style={{backgroundColor: '#847DDC', color: '#ffffff', left: '1100', fontSize: '40', width: '900', top: '-800px', height: '100'}}><span className="glyphicon glyphicon-shopping-cart" />&nbsp;ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-box" style={{ width: '900px',height: '730px', backgroundcolor: '#ffffff',  border: '1px solid #ccc',  padding: '20px',   position: 'relative', margin: '1200px 1340px',    boxshadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
          <h2 style={{fontsize: '60px',textalign: 'center'}}>Description</h2>
          <p style={{  margin: '0',color: '#333',fontsize: '30px',  fontfamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}}>The Ninth Life" is a captivating novel that seamlessly weaves together elements of mystery, fantasy, and family drama. Written by [Author's Name], this literary work takes readers on a spellbinding journey through the intricate threads of a unique storyline.
            The story revolves around [Protagonist's Name], a seemingly ordinary individual who discovers a mysterious ability: the power to relive different versions of their life. As [Protagonist] delves into the complexities of this extraordinary gift, they must navigate a web of choices and consequences that transcend time and space.
            The narrative unfolds with a rich tapestry of characters, each contributing to the intricate plot in unexpected ways. Themes of destiny, identity, and the interconnectedness of lives are explored as the protagonist grapples with the profound implications of their newfound ability. </p>
        </div>
        <div>
          <p>2023  ©Bookley.  ALL Rights Reserved.</p>
        </div>
      </div></div></section></div>

    </div>
  )
}

export default Discription