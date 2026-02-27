/**
 * Placeholder location and expert data for connecting users to a local expert.
 * In production this would come from an API.
 */

export type LocationOption = {
  value: string;
  label: string;
};

export type Expert = {
  id: string;
  name: string;
  email: string;
  mobile: string; // E.164 or national format for tel: and WhatsApp
};

// Sample states with their districts (provinces) and cities
export const LOCATION_DATA: Record<
  string,
  { districts: LocationOption[]; cities: LocationOption[] }
> = {
  'Maharashtra': {
    districts: [
      { value: 'mumbai', label: 'Mumbai' },
      { value: 'pune', label: 'Pune' },
      { value: 'nagpur', label: 'Nagpur' },
    ],
    cities: [
      { value: 'mumbai_city', label: 'Mumbai' },
      { value: 'pune_city', label: 'Pune' },
      { value: 'nagpur_city', label: 'Nagpur' },
      { value: 'thane', label: 'Thane' },
      { value: 'nashik', label: 'Nashik' },
    ],
  },
  'Karnataka': {
    districts: [
      { value: 'bangalore_urban', label: 'Bengaluru Urban' },
      { value: 'mysuru', label: 'Mysuru' },
      { value: 'mangaluru', label: 'Dakshina Kannada' },
    ],
    cities: [
      { value: 'bangalore', label: 'Bengaluru' },
      { value: 'mysuru_city', label: 'Mysuru' },
      { value: 'mangaluru_city', label: 'Mangaluru' },
      { value: 'hubli', label: 'Hubli' },
    ],
  },
  'Delhi': {
    districts: [
      { value: 'central', label: 'Central Delhi' },
      { value: 'south', label: 'South Delhi' },
      { value: 'north', label: 'North Delhi' },
    ],
    cities: [
      { value: 'new_delhi', label: 'New Delhi' },
      { value: 'dwarka', label: 'Dwarka' },
      { value: 'rohini', label: 'Rohini' },
    ],
  },
  'Uttar Pradesh': {
    districts: [
      { value: 'lucknow', label: 'Lucknow' },
      { value: 'kanpur', label: 'Kanpur Nagar' },
      { value: 'varanasi', label: 'Varanasi' },
    ],
    cities: [
      { value: 'lucknow_city', label: 'Lucknow' },
      { value: 'kanpur_city', label: 'Kanpur' },
      { value: 'varanasi_city', label: 'Varanasi' },
      { value: 'allahabad', label: 'Prayagraj' },
    ],
  },
  'Tamil Nadu': {
    districts: [
      { value: 'chennai', label: 'Chennai' },
      { value: 'coimbatore', label: 'Coimbatore' },
      { value: 'madurai', label: 'Madurai' },
    ],
    cities: [
      { value: 'chennai_city', label: 'Chennai' },
      { value: 'coimbatore_city', label: 'Coimbatore' },
      { value: 'madurai_city', label: 'Madurai' },
    ],
  },
};

export const STATES: LocationOption[] = Object.keys(LOCATION_DATA).map((s) => ({
  value: s,
  label: s,
}));

// One placeholder expert per state
export const EXPERTS_BY_STATE: Record<string, Expert> = {
  'Maharashtra': {
    id: 'expert-mh',
    name: 'Priya Sharma',
    email: 'priya.sharma@gyanshala.example.com',
    mobile: '919876543210',
  },
  'Karnataka': {
    id: 'expert-ka',
    name: 'Ravi Kumar',
    email: 'ravi.kumar@gyanshala.example.com',
    mobile: '919876543211',
  },
  'Delhi': {
    id: 'expert-dl',
    name: 'Anita Verma',
    email: 'anita.verma@gyanshala.example.com',
    mobile: '919876543212',
  },
  'Uttar Pradesh': {
    id: 'expert-up',
    name: 'Vikram Singh',
    email: 'vikram.singh@gyanshala.example.com',
    mobile: '919876543213',
  },
  'Tamil Nadu': {
    id: 'expert-tn',
    name: 'Lakshmi Rajan',
    email: 'lakshmi.rajan@gyanshala.example.com',
    mobile: '919876543214',
  },
};

export function getExpertForLocation(
  state: string,
  _district: string,
  _city: string
): Expert {
  return (
    EXPERTS_BY_STATE[state] ?? Object.values(EXPERTS_BY_STATE)[0]!
  );
}
