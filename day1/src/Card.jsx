import profile from './sakamoto.png'
function Card(){
    return(
        
        <div className="card">
            <img className='img' src={profile} alt="img.jpg" />
            <h1 id='tit'>Sakamoto</h1>
            <p>He is a former member in the smugling gnag he is quiet and very dangerous</p>
        </div>
    );
}
export default Card;