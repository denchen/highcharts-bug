import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

// Setup Enzyme's React adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
