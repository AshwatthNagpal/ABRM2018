import { createStackNavigator } from 'react-navigation';
import Login from './screens/login'
import Category from './screens/category'
import WelcomeMessage from './screens/welcomemessage';
import AboutBangkok from './screens/aboutbangkok';
import Hotels from './screens/hotels';
import TravelDetails from './screens/traveldetails';
import ToBangkok from './screens/tobangkok';
import FromBangkok from './screens/frombangkok';
import EmergencyContactDetails from './screens/emergencycontactsdetails';
import CurrencyConversion from './screens/currencyconversion';
import WorldClock from './screens/worldclock';
import PlacesToVisit from './screens/placestovisit';
import Questions from './screens/questions';
import FeedBack from './screens/feedback';
import Weather from './screens/weather';
import Notifications from './screens/notifications';
import ToVisit from './screens/tovisit';
import ToShop from './screens/toshop';
import GrandPalace from './screens/placestovisit/grandpalace';
import WatPho from './screens/placestovisit/watpho';
import WatArun from './screens/placestovisit/watarun';

import NationalMuseum from './screens/placestovisit/nationalmuseum';
import ChatuchakMarket from './screens/placestovisit/chatuchakmarket'
import LumpiniPark from './screens/placestovisit/lumpinipark';
import PlatinumFashionMall from './screens/placestovisit/platinumfashionmall';
import PartunamMarket from './screens/placestovisit/partunammarket';
import DosAndDonts from './screens/dosanddonts';
import Dos from './screens/dos';
import Donts from './screens/donts';
import UnionMall from './screens/placestovisit/unionmall';

import VictoryMonumentMarket from './screens/placestovisit/victorymonumentmarket';
import CentralWorldBangkok from './screens/placestovisit/centralworldbangkok';
import Other from './screens/placestovisit/others';
import ToEat from './screens/toeat';
import PlacesToEat from './screens/select_cuisine/placestoeat';
import Gaggan from './screens/select_cuisine/gaggan';
import Bawarchi from './screens/select_cuisine/bawarchi';
import TheGreatKebab from './screens/select_cuisine/thegreatkebab';
import SriGanesha from './screens/select_cuisine/sriganesha';
import Charcoal from './screens/select_cuisine/charcoal';
import Indus from './screens/select_cuisine/indus';
import RangMahal from './screens/select_cuisine/rangmahal';
import Maya from './screens/select_cuisine/maya';
import ThaiCuisine from './screens/thaicuisine';
import BaanKhanitha from './screens/select_cuisine/baankhanitha';
import SiamTeaRoom from './screens/select_cuisine/siamtearoom';
import MayVeggieHome from './screens/select_cuisine/mayveggiehome';
import MultiCuisine from './screens/select_cuisine/multicuisine';
import TheMulberry from './screens/select_cuisine/themulberry';
import Govinda from './screens/select_cuisine/govinda';
import CuisineUnplugged from './screens/select_cuisine/cuisineunplugged';
import ConferenceAgenda from './screens/conferenceAgenda/conferenceagenda';
import Xyz from './screens/placestovisit/xyz';
import DressCode from './screens/dresscode';
import Noti from './screens/noti';
export default RootStack = createStackNavigator({
    login: Login,
    cat: Category,
    tobangkok: ToBangkok,
    frombangkok: FromBangkok,
    tovisit: ToVisit,
    toshop: ToShop,
    toeat: ToEat,
    grandpalace: GrandPalace,
    watpho: WatPho,
    watarun: WatArun,
    xyz: Xyz,
    noti: Noti,
    nationalmuseum: NationalMuseum,
    chatuchakmarket: ChatuchakMarket,
    lumpinipark: LumpiniPark,
    platinumfashionmall: PlatinumFashionMall,
    pratunammarket: PartunamMarket,
    unionmall: UnionMall,
    victorymonumentmarket: VictoryMonumentMarket,
    centralworldbangkok: CentralWorldBangkok,
    others: Other,
    dos: Dos,
    donts: Donts,
    gaggan: Gaggan,
    bawarchi: Bawarchi,
    thegreatkebab: TheGreatKebab,
    sriganesha: SriGanesha,
    charcoal: Charcoal,
    placestoeat: PlacesToEat,
    indus: Indus,
    rangmahal: RangMahal,
    maya: Maya,
    baankhanitha: BaanKhanitha,
    siamtearoom: SiamTeaRoom,
    thaicuisine: ThaiCuisine,
    mayveggiehome: MayVeggieHome,
    multicuisine: MultiCuisine,
    themulberry: TheMulberry,
    govinda: Govinda,
    cuisineunplugged: CuisineUnplugged,
    a1: WelcomeMessage,
    a2: DressCode,
    a3: AboutBangkok,
    a4: Hotels,
    a5: ConferenceAgenda,
    a6: TravelDetails,
    a7: DosAndDonts,
    a8: EmergencyContactDetails,
    a9: CurrencyConversion,
    a10: WorldClock,
    a11: PlacesToVisit,
    a12: Questions,
    a13: FeedBack,
    a14: Weather,
    a15: Notifications
},
    {
        initialRoute: 'login',
        headerMode: 'screen'
    }
)