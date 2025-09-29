"use client";

interface GoogleMapProps {
  address: string;
  className?: string;
}

export default function GoogleMap({ address, className = "" }: GoogleMapProps) {
  // Encode address for Google Maps URL
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodedAddress}`;

  return (
    <div className={`w-full ${className}`}>
      <div className="space-y-3">
        <h4 className="font-semibold text-lg">Location</h4>
        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden border border-border/30">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lynx AI Office Location"
            className="w-full h-full"
          />
        </div>
        <p className="text-sm text-muted-foreground">📍 {address}</p>
      </div>
    </div>
  );
}
