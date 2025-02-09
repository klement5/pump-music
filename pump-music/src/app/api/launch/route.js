// app/api/launch/route.js
export async function POST(req) {
  try {    
    // Dynamically import the blockchain functions; this ensures Hardhat is only loaded at runtime on the server.
    const { submitRequest, submitProof } = await import("../../../../scripts/launchBlockchain.js");

    // Step 1: Submit the attestation request and get the round ID.
    const roundId = await submitRequest();
    console.log("Request submitted. Round ID:", roundId);
    
    // Step 2: Wait for 90 seconds to allow the attestation consensus to finalize.
    console.log("Waiting for 90 seconds for consensus...");
    await new Promise((resolve) => setTimeout(resolve, 90 * 1000));
    
    // Step 3: Submit the proof using the round ID from submitRequest.
    await submitProof(roundId);
    
    // Return a success response.
    return new Response(
      JSON.stringify({
        success: true,
        message: "Artist memecoin launched successfully!",
        roundId: roundId,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

