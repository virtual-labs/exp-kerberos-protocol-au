### Procedure

This experiment simulates the Kerberos authentication protocol. Follow these steps to complete the simulation:

1.  **Initiate Authentication:**
    *   Select the **Client** as the source and the **Authentication Server (AS)** as the destination.
    *   This represents the client requesting a Ticket-Granting Ticket (TGT).
    *   Draw the line to represent this request.

2.  **Receive TGT:**
    *   The AS will respond to the Client. Select the **AS** as the source and the **Client** as the destination.
    *   This simulates the AS sending the TGT and a session key to the client.
    *   Draw the line for this step.

3.  **Request Service Ticket:**
    *   Select the **Client** as the source and the **Ticket-Granting Server (TGS)** as the destination.
    *   The client sends the TGT to request a service ticket.
    *   Draw the corresponding line.

4.  **Receive Service Ticket:**
    *   The TGS validates the TGT and sends a service ticket to the client.
    *   Select the **TGS** as the source and the **Client** as the destination.
    *   Draw this communication line.

5.  **Access the Service:**
    *   The client can now request access to the desired service (e.g., a file server).
    *   Select the **Client** as the source and the **Service/Server** as the destination.
    *   Draw the line representing the service request with the service ticket.

6.  **Verify Your Work:**
    *   Once you have drawn all the lines representing the Kerberos workflow, click the **Verify** button to check if the sequence is correct.

**Note:** Select the source and destination for each step carefully. After selecting them, choose the appropriate label for the communication and click "Create Line".