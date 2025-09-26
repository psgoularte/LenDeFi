import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-card mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center text-center">
          <div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Image
                src="/Logo.png"
                alt="LenDeFi Logo"
                width={24}
                height={24}
                className="rounded"
              />
              <span className="font-bold">LenDeFi</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Secure, transparent, and decentralized lending platform built on
              blockchain technology.
            </p>
          </div>
        </div>
        <a
          href="https://github.com/psgoularte/LenDeFi"
          className="flex justify-center mt-8 text-m text-white hover:text-muted-foreground"
        >
          Github Project
        </a>
      </div>
    </footer>
  );
}