import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `https://backend.portal.abs.xyz/api/oracle/eth`,
      {
        headers: {
          "User-Agent": "fireball",
          Accept: "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `API returned ${response.status}: ${response.statusText}`,
      );
    }

    const ethPriceData = await response.json();

    return NextResponse.json({
      success: true,
      message: "eth price fetched successfully",
      data: {
        price: parseFloat(ethPriceData.current_price),
      },
    });
  } catch (error) {
    console.error("error getting eth price", error);
    return NextResponse.json(
      { success: false, message: "error getting eth price" },
      { status: 500 },
    );
  }
}
