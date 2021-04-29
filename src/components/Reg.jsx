import './reg.css';
let obj = JSON.parse(sessionStorage.data);

const Reg = () => {
    console.log("AIK AIK: " + obj.record[0].name);
    let flipCardFlip = cardTop(0, 'ddc-reg flip-card-flip');
    let flipCardUnder = cardTop(1, 'ddc-reg flip-card-under');
    let flipCardNext = cardTop(2, 'ddc-reg flip-card-next');
    let flipCardFlipBottom = cardBottom(0, 'ddc-reg flip-card-flip-bottom');
    let flipCardUnderBottom = cardBottom(2, 'ddc-reg flip-card-under-bottom');
    let flipCardNextBottom = cardBottom(1, 'ddc-reg flip-card-next-bottom');
    return (
        <div className="ddc-reg flip-card">
            {flipCardFlip}
            {flipCardUnder}
            <div className="ddc-reg flip-card-extra">
                <div className="ddc-reg flip-card-front"></div>
            </div>
            {flipCardNext}

            {flipCardFlipBottom}
            {flipCardUnderBottom}
            <div className="ddc-reg flip-card-extra-bottom">
                <div className="ddc-reg flip-card-front-bottom"></div>
            </div>
            {flipCardNextBottom}
        </div>

    )
}

function cardTop(index, className) {
    return (
        <div className={className}>
            <div className="ddc-reg flip-card-front">
                <img src={obj.record[index].img} alt={obj.record[index].name} />
                <p className="ddc-reg dog-name"><span className="ddc-reg decoration">&hearts;&nbsp;
            </span>{obj.record[index].name}<span className="ddc-reg decoration">&nbsp;&hearts;</span></p>
            </div>
        </div>
    )
}

function cardBottom(index, className) {
    let phoneNo = 'tel: ' + obj.record[index].owner.phoneNumber;
    
    return (
        <div className={className}>
            <div className="ddc-reg flip-card-front-bottom">
                <div className="ddc-reg title checked-in">Chip no:</div>
                <div className="ddc-reg chip-no">{obj.record[index].chipNumber}</div>
                <div className="ddc-reg title">Breed:</div>
                <div>{obj.record[index].breed}</div>
                <div className="ddc-reg breed-info"><button>More info</button></div>
                <div className="ddc-reg title">Sex:</div>
                <div>{obj.record[index].sex}</div>
                <div className="ddc-reg title">Age:</div>
                <div>{obj.record[index].age}</div>
                <div className="ddc-reg title">Owner:</div>
                <div className="ddc-reg owner">
                    {obj.record[index].owner.name}
                    {obj.record[index].owner.lastName}
                </div>
                <div className="ddc-reg phone">
                    <a href={phoneNo}>{String.fromCharCode(9742)}</a>
                </div>
                <div className="ddc-reg title checked-in">Checked in:</div>
                <div className="ddc-reg toggle-button">
                    <label className="ddc-reg switch">
                    <input type="checkbox" defaultChecked={obj.record[index].present} />
                        <span className="ddc-reg slider"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Reg;