function RoomViewCard() {
  return (
    <div className="card bg-white shadow-lg">
      <div className="card-body">
        <h3 className="card-title">Cozy Apartment in New York</h3>
        <p>2 Beds | 1 Bath | $1,200/month</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  )
}


export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Hero Section */}
      <section className="hero bg-primary text-primary-content">
        <div className="hero-content text-center py-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Find Your Perfect Roommate</h1>
            <p className="py-6 text-lg">
              Discover people who match your lifestyle and preferences. 
              Your next best living experience is just a few clicks away.
            </p>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search for cities or roommate preferences"
                className="input input-lg input-bordered w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-base-200">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Featured Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example Cards */}
            {[1, 2, 3].map((listing) => (
              <RoomViewCard key={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-primary text-primary-content">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to Find Your Match?</h2>
          <p className="py-4">
            Create your profile, explore listings, and connect with potential roommates.
          </p>
          <button className="btn btn-secondary btn-lg">Get Started</button>
        </div>
      </section>
    </div>
  );
}
