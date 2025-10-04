@component('mail::message')
# Nova Mensagem de Contato

Recebeu uma nova mensagem através do formulário de contato do website.

## Detalhes do Contacto

**Nome:** {{ $data['nome'] }}  
**Email:** {{ $data['email'] }}  
**Telefone:** {{ $data['telefone'] }}  
@if(isset($data['empresa']) && $data['empresa'])
**Empresa:** {{ $data['empresa'] }}  
@endif
**Serviço de Interesse:** {{ $data['servico'] }}

## Mensagem

{{ $data['mensagem'] }}

---

**Data:** {{ now()->format('d/m/Y H:i') }}  
**IP:** {{ request()->ip() }}

@component('mail::button', ['url' => 'mailto:' . $data['email']])
Responder por Email
@endcomponent

Obrigado,<br>
{{ config('app.name') }}
@endcomponent
