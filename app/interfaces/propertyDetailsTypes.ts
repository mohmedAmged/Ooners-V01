interface PropertyDetails {
    ispadding: string,
    id: number;
    title: string;
    code: string;
    description: string;
    short_description: string;
    country: string;
    city: string;
    main_image: string;
    listing_type: string;
    bedrooms_count: number;
    bathrooms_count: number;
    area: string;
    total_value: string;
    min_investment_amount: string;
    purchase_price: string; // Assuming purchase_price is a number
    expected_yearly_rent: string;
    net_yearly_income: string;
    projected_net_yield: string;
    number_of_investors: string;
    number_of_shares: number;
    price_per_share: string;
    created_at: string;
    available_amount: string;
    funded_amount: string;
    funded_percentage: string; 
    investment_status: string;
    attachments: { id: number; file: string; type: string; file_name: string }[];
    images: { id: number; file: string; type: string; file_name: string }[];
    facilities: { id: number; name: string; icon: string }[];
  }

  export default PropertyDetails;