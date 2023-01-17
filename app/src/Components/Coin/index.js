import { Box } from "./styles";
import { CoinsService } from "../../Services/coinsService";
import frame from "../../assets/coinSprite.png";

const Coin = ({coinName}) => {

  const coinsService = new CoinsService()
  const dataCoin = coinsService.findCoinByName(coinName)

  return (
    <Box>
      <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              height: "100px",
              width: "100px",
              backgroundImage: `url(${frame})`,
              backgroundColor: dataCoin.color || "yellow",
              backgroundSize: "100px",
              color: dataCoin.textColor || "black",
              flexDirection: "column",
              overflow: "hidden"
            }}
          >
            <h2
              style={{
                margin: "0px"
              }}
            >
              {dataCoin.value}
            </h2>
            {dataCoin.name}
          </div>
    </Box>
  )
}

export {
  Coin
}